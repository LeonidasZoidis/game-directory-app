// generic reusable hook

import { useEffect, useState } from 'react';

interface useFetchProps {
    url: string;
    options?: RequestInit;
}

const useFetch = <T,>({ url, options }: useFetchProps) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) {
            throw new Error('missing url');
        }
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(url, { ...options, signal });

                if (!res.ok) {
                    throw Error(`fetch error occured: ${error}`);
                }

                const json = await res.json();
                setData(json);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('unknown error');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();

        return () => controller.abort();
    }, [url, options, error]);

    return { data, loading, error };
};

export default useFetch;
