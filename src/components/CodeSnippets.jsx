import React from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const CodeSnippets = () => {
    const [copied, setCopied] = useState(null);

    const snippets = [
        {
            title: 'React Custom Hook',
            language: 'javascript',
            code: `const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};`
        },
        {
            title: 'Debounce Function',
            language: 'javascript',
            code: `const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Usage
const handleSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 500);`
        },
        {
            title: 'Python Decorator',
            language: 'python',
            code: `def timing_decorator(func):
  def wrapper(*args, **kwargs):
    import time
    start = time.time()
    result = func(*args, **kwargs)
    end = time.time()
    print(f"{func.__name__} took {end - start:.2f}s")
    return result
  return wrapper

@timing_decorator
def expensive_function():
  # Your code here
  pass`
        }
    ];

    const copyToClipboard = (index) => {
        navigator.clipboard.writeText(snippets[index].code);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="code-snippets" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">Code <span>Snippets</span></h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}
                >
                    {snippets.map((snippet, index) => (
                        <motion.div
                            key={index}
                            className="glass"
                            style={{
                                borderRadius: '15px',
                                overflow: 'hidden'
                            }}
                            whileHover={{ transform: 'translateY(-10px)' }}
                        >
                            <div style={{ padding: '20px', borderBottom: '1px solid var(--glass-border)' }}>
                                <h3 style={{ marginBottom: '0', color: 'var(--text-primary)' }}>
                                    {snippet.title}
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: 'var(--primary-color)', margin: '5px 0 0 0' }}>
                                    {snippet.language}
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '20px', position: 'relative' }}>
                                <pre style={{
                                    margin: '0',
                                    fontSize: '0.85rem',
                                    lineHeight: '1.5',
                                    color: 'var(--text-primary)',
                                    overflow: 'auto',
                                    maxHeight: '250px'
                                }}>
                                    <code>{snippet.code}</code>
                                </pre>
                                <button
                                    onClick={() => copyToClipboard(index)}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        backgroundColor: 'var(--primary-color)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '8px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    title="Copy code"
                                >
                                    {copied === index ? (
                                        <>
                                            <Check size={16} />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={16} />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CodeSnippets;
