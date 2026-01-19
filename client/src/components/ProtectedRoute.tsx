
import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [, setLocation] = useLocation();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!session) {
        setLocation("/admin/login");
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
