import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { CustomerUser, CustomerLicense } from '../types.ts';

const DEMO_LICENSES: CustomerLicense[] = [
  {
    id: 'lic-1',
    orderNumber: 'PB-10492',
    productName: 'YouTube Premium (12 Months Family Invite)',
    category: 'entertainment',
    duration: '12 Months',
    licenseKey: 'YT-PREM-2026-PB9942-881A',
    licenseType: 'account_invite',
    status: 'active',
    activatedAt: '2026-09-15',
    expiresAt: '2027-09-15',
    instructions: 'Check your Gmail inbox for the Google Family invitation link. Click accept while logged in to your personal Google account.'
  },
  {
    id: 'lic-2',
    orderNumber: 'PB-10411',
    productName: 'Netflix 4K Ultra HD Single Screen Combo (1 Month)',
    category: 'entertainment',
    duration: '1 Month',
    licenseKey: 'DEMO-NO-SUBSCRIPTION-CREDENTIALS',
    licenseType: 'credentials',
    status: 'active',
    activatedAt: '2026-09-28',
    expiresAt: '2026-10-28',
    instructions: 'This demo license has no live account credentials. Configure secure backend delivery to provide customer credentials.'
  },
  {
    id: 'lic-3',
    orderNumber: 'PB-10380',
    productName: 'ChatGPT Plus (GPT-5 & DALL-E 3) Private Seat',
    category: 'software',
    duration: '1 Month',
    licenseKey: 'OPENAI-PLUS-INV-88204-QZ',
    licenseType: 'account_invite',
    status: 'active',
    activatedAt: '2026-09-20',
    expiresAt: '2026-10-20',
    instructions: 'Open OpenAI invite link sent to your registered email to link your ChatGPT workspace.'
  },
  {
    id: 'lic-4',
    orderNumber: 'PB-10290',
    productName: 'Canva Pro Enterprise / Educator Team Access',
    category: 'software',
    duration: '1 Year',
    licenseKey: 'CANVA-TEAM-INV-7729-VIP',
    licenseType: 'account_invite',
    status: 'active',
    activatedAt: '2026-08-10',
    expiresAt: '2027-08-10',
    instructions: 'Accept the Canva Pro team invite email from PlayBeat Admin to get unlimited brand kit & AI magic eraser tools.'
  }
];

const DEFAULT_DEMO_CUSTOMER: CustomerUser = {
  id: 'cust-demo-1',
  name: 'Zain Malik',
  email: 'zain.malik@playbeat.digital',
  phone: '+92 332 1049333',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  memberTier: 'Gold',
  rewardPoints: 1420,
  memberSince: 'July 2026',
  preferredCurrency: 'PKR',
  isVerified: true,
  notificationPrefs: {
    whatsapp: true,
    email: true,
    sms: false
  }
};

interface CustomerAuthContextType {
  customer: CustomerUser | null;
  isAuthenticated: boolean;
  licenses: CustomerLicense[];
  signIn: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (name: string, email: string, phone: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signInWithGoogle: (credential: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
  updateProfile: (updates: Partial<CustomerUser>) => void;
  addLicense: (license: Omit<CustomerLicense, 'id'>) => void;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  authModalTab: 'signin' | 'signup';
  setAuthModalTab: (tab: 'signin' | 'signup') => void;
  openAuthModal: (tab?: 'signin' | 'signup') => void;
  closeAuthModal: () => void;
  isProfileModalOpen: boolean;
  setProfileModalOpen: (open: boolean) => void;
  openProfileModal: (tab?: string) => void;
  closeProfileModal: () => void;
  activeProfileTab: string;
  setActiveProfileTab: (tab: string) => void;
}

const CustomerAuthContext = createContext<CustomerAuthContextType | undefined>(undefined);

interface GoogleCustomerProfile {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

const isGoogleCustomerProfile = (value: unknown): value is GoogleCustomerProfile =>
  typeof value === 'object' &&
  value !== null &&
  'id' in value &&
  typeof value.id === 'string' &&
  'name' in value &&
  typeof value.name === 'string' &&
  'email' in value &&
  typeof value.email === 'string' &&
  (!('picture' in value) || typeof value.picture === 'string');

const isCustomerUser = (value: unknown): value is CustomerUser =>
  typeof value === 'object' &&
  value !== null &&
  'id' in value &&
  typeof value.id === 'string' &&
  'name' in value &&
  typeof value.name === 'string' &&
  'email' in value &&
  typeof value.email === 'string' &&
  'phone' in value &&
  typeof value.phone === 'string' &&
  'memberTier' in value &&
  (value.memberTier === 'Silver' || value.memberTier === 'Gold' || value.memberTier === 'VIP Platinum') &&
  'rewardPoints' in value &&
  typeof value.rewardPoints === 'number' &&
  'memberSince' in value &&
  typeof value.memberSince === 'string' &&
  'preferredCurrency' in value &&
  typeof value.preferredCurrency === 'string' &&
  'isVerified' in value &&
  typeof value.isVerified === 'boolean' &&
  'notificationPrefs' in value &&
  typeof value.notificationPrefs === 'object' &&
  value.notificationPrefs !== null &&
  'whatsapp' in value.notificationPrefs &&
  typeof value.notificationPrefs.whatsapp === 'boolean' &&
  'email' in value.notificationPrefs &&
  typeof value.notificationPrefs.email === 'boolean' &&
  'sms' in value.notificationPrefs &&
  typeof value.notificationPrefs.sms === 'boolean';

export const CustomerAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState<CustomerUser | null>(() => {
    try {
      const saved = localStorage.getItem('pb-customer-session');
      if (saved) {
        const storedCustomer: unknown = JSON.parse(saved);
        if (isCustomerUser(storedCustomer) && !storedCustomer.id.startsWith('google-')) {
          return storedCustomer;
        }
      }
      // Return demo user for seamless instant evaluation if no explicit logout
      const hasLoggedOut = localStorage.getItem('pb-customer-logged-out');
      if (!hasLoggedOut) {
        return DEFAULT_DEMO_CUSTOMER;
      }
      return null;
    } catch {
      return null;
    }
  });

  const [licenses, setLicenses] = useState<CustomerLicense[]>(() => {
    try {
      const saved = localStorage.getItem('pb-customer-licenses');
      return saved ? JSON.parse(saved) : DEMO_LICENSES;
    } catch {
      return DEMO_LICENSES;
    }
  });

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'signin' | 'signup'>('signup');
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [activeProfileTab, setActiveProfileTab] = useState('overview');

  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID?.trim();
    if (!clientId || clientId.includes('YOUR_GOOGLE_WEB_CLIENT_ID')) return;

    let active = true;

    const restoreGoogleSession = async () => {
      try {
        const response = await fetch('/api/auth/google', {
          credentials: 'same-origin'
        });
        if (response.status === 401) return;
        if (!response.ok) {
          throw new Error(`Google session lookup failed (${response.status}).`);
        }

        const result: unknown = await response.json();
        if (
          typeof result === 'object' &&
          result !== null &&
          'user' in result &&
          isGoogleCustomerProfile(result.user)
        ) {
          const user = result.user;
          if (active) {
            setCustomer({
              id: `google-${user.id}`,
              name: user.name,
              email: user.email,
              phone: '',
              avatarUrl:
                'picture' in user && typeof user.picture === 'string' ? user.picture : undefined,
              memberTier: 'Silver',
              rewardPoints: 0,
              memberSince: new Date().toLocaleDateString('en', {
                month: 'long',
                year: 'numeric'
              }),
              preferredCurrency: 'PKR',
              isVerified: true,
              notificationPrefs: { whatsapp: false, email: true, sms: false }
            });
          }
        } else {
          throw new Error('Google session response was invalid.');
        }
      } catch (error) {
        console.error('Could not restore the Google customer session.', error);
      }
    };

    void restoreGoogleSession();
    return () => {
      active = false;
    };
  }, []);

  // Persist customer state changes
  useEffect(() => {
    if (customer) {
      localStorage.setItem('pb-customer-session', JSON.stringify(customer));
      localStorage.removeItem('pb-customer-logged-out');
    } else {
      localStorage.removeItem('pb-customer-session');
    }
  }, [customer]);

  // Persist licenses
  useEffect(() => {
    localStorage.setItem('pb-customer-licenses', JSON.stringify(licenses));
  }, [licenses]);

  const signIn = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    // Quick demo simulation
    await new Promise((res) => setTimeout(res, 600));
    if (!email || !pass) {
      return { success: false, error: 'Please enter both email and password.' };
    }

    const username = email.split('@')[0];
    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);

    const loggedInUser: CustomerUser = {
      id: `cust-${Date.now()}`,
      name: email === DEFAULT_DEMO_CUSTOMER.email ? DEFAULT_DEMO_CUSTOMER.name : formattedName,
      email: email,
      phone: '+92 332 1049333',
      avatarUrl: DEFAULT_DEMO_CUSTOMER.avatarUrl,
      memberTier: 'Gold',
      rewardPoints: 1420,
      memberSince: 'September 2026',
      preferredCurrency: 'PKR',
      isVerified: true,
      notificationPrefs: {
        whatsapp: true,
        email: true,
        sms: false
      }
    };

    setCustomer(loggedInUser);
    setAuthModalOpen(false);
    return { success: true };
  };

  const signUp = async (
    name: string,
    email: string,
    phone: string,
    pass: string
  ): Promise<{ success: boolean; error?: string }> => {
    await new Promise((res) => setTimeout(res, 750));
    if (!name || !email || !pass) {
      return { success: false, error: 'Please fill out all required fields.' };
    }

    const newUser: CustomerUser = {
      id: `cust-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone || '+92 332 1049333',
      avatarUrl: undefined,
      memberTier: 'Silver',
      rewardPoints: 0,
      memberSince: new Date().toLocaleDateString('en', { month: 'long', year: 'numeric' }),
      preferredCurrency: 'PKR',
      isVerified: true,
      notificationPrefs: {
        whatsapp: true,
        email: true,
        sms: true
      }
    };

    setLicenses([]);
    setCustomer(newUser);
    setAuthModalOpen(false);
    return { success: true };
  };

  const signInWithGoogle = useCallback(async (
    credential: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential })
      });
      const result: unknown = await response.json();

      if (
        !response.ok ||
        typeof result !== 'object' ||
        result === null ||
        !('user' in result) ||
        !isGoogleCustomerProfile(result.user)
      ) {
        const error =
          typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
            ? result.error
            : 'Google sign-in could not be verified. Please try again.';
        return { success: false, error };
      }

      const userData = result.user;
      const socialUser: CustomerUser = {
        id: `google-${userData.id}`,
        name: userData.name,
        email: userData.email,
        phone: '',
        avatarUrl:
          'picture' in userData && typeof userData.picture === 'string'
            ? userData.picture
            : undefined,
        memberTier: 'Silver',
        rewardPoints: 0,
        memberSince: new Date().toLocaleDateString('en', { month: 'long', year: 'numeric' }),
        preferredCurrency: 'PKR',
        isVerified: true,
        notificationPrefs: {
          whatsapp: false,
          email: true,
          sms: false
        }
      };

      setCustomer(socialUser);
      setAuthModalOpen(false);
      return { success: true };
    } catch {
      return {
        success: false,
        error: 'Google sign-in could not reach the verification service. Please try again.'
      };
    }
  }, []);

  const signOut = () => {
    const hasGoogleSession = customer?.id.startsWith('google-') ?? false;
    setCustomer(null);
    localStorage.setItem('pb-customer-logged-out', 'true');
    setProfileModalOpen(false);
    if (hasGoogleSession) {
      void fetch('/api/auth/google', {
        method: 'DELETE',
        credentials: 'same-origin'
      }).catch((error: unknown) => {
        console.error('Could not clear the Google customer session.', error);
      });
    }
  };

  const updateProfile = (updates: Partial<CustomerUser>) => {
    setCustomer((prev) => (prev ? { ...prev, ...updates } : null));
  };

  const addLicense = (licenseData: Omit<CustomerLicense, 'id'>) => {
    const newLic: CustomerLicense = {
      ...licenseData,
      id: `lic-${Date.now()}`
    };
    setLicenses((prev) => [newLic, ...prev]);
  };

  const openAuthModal = (tab: 'signin' | 'signup' = 'signup') => {
    setAuthModalTab(tab);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const openProfileModal = (tab: string = 'overview') => {
    setActiveProfileTab(tab);
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  return (
    <CustomerAuthContext.Provider
      value={{
        customer,
        isAuthenticated: !!customer,
        licenses,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
        addLicense,
        isAuthModalOpen,
        setAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        openAuthModal,
        closeAuthModal,
        isProfileModalOpen,
        setProfileModalOpen,
        openProfileModal,
        closeProfileModal,
        activeProfileTab,
        setActiveProfileTab
      }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
};

export const useCustomerAuth = () => {
  const context = useContext(CustomerAuthContext);
  if (!context) {
    throw new Error('useCustomerAuth must be used within a CustomerAuthProvider');
  }
  return context;
};
