import React, { useState, useEffect } from 'react';
import { Trophy, Zap, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState(['All']);
    const [showAll, setShowAll] = useState(false);
    const ITEMS_PER_CATEGORY = 3;

    useEffect(() => {
        // Load achievements from public folder
        const loadAchievements = async () => {
            try {
                // Try to fetch metadata file if it exists
                const response = await fetch('/achievements/data.json');
                if (response.ok) {
                    const data = await response.json();
                    setAchievements(data);
                    const uniqueCategories = ['All', ...new Set(data.map(a => a.category))];
                    setCategories(uniqueCategories);
                } else {
                    // Fallback: display placeholder message
                    setAchievements([]);
                }
            } catch (error) {
                console.log('Achievements data file not yet created. Upload images to /public/achievements/ folder with data.json');
                setAchievements([]);
            } finally {
                setLoading(false);
            }
        };

        loadAchievements();
    }, []);

    const filteredAchievements = achievements.filter(achievement => {
        const matchesSearch = achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            achievement.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || achievement.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const displayedAchievements = showAll ? filteredAchievements : filteredAchievements.slice(0, ITEMS_PER_CATEGORY);

    const emptyState = (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
            <Trophy size={48} style={{ margin: '0 auto 20px', opacity: 0.3 }} />
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Add Your Achievements</h3>
            <p style={{ marginBottom: '20px' }}>
                Create a folder <code style={{ backgroundColor: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '4px', color: 'var(--primary-color)' }}>public/achievements</code> and add your achievement images with a <code style={{ backgroundColor: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '4px', color: 'var(--primary-color)' }}>data.json</code> file.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Format for data.json:
                <pre style={{ backgroundColor: 'var(--bg-secondary)', padding: '15px', borderRadius: '8px', overflow: 'auto', textAlign: 'left', marginTop: '10px', fontSize: '0.8rem' }}>
{`[
  {
    "id": 1,
    "title": "Achievement Title",
    "description": "Description",
    "category": "Category Name",
    "image": "image-filename.jpg",
    "date": "2024-01-15"
  }
]`}
                </pre>
            </p>
        </div>
    );

    return (
        <section id="achievements" style={{ padding: '100px 0', backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="container">
                <h2 className="section-title">Achievements & <span>Activities</span></h2>

                {achievements.length > 0 && (
                    <>
                        {/* Search and Filter */}
                        <div style={{ marginBottom: '50px' }}>
                            <div style={{ maxWidth: '500px', margin: '0 auto 30px', position: 'relative' }}>
                                <Search size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                                <input
                                    type="text"
                                    placeholder="Search achievements..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 15px 12px 45px',
                                        backgroundColor: 'var(--bg-primary)',
                                        border: '1px solid var(--text-secondary)',
                                        borderRadius: '10px',
                                        color: 'var(--text-primary)',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                                        style={{ padding: '8px 16px', borderRadius: '20px' }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Grid */}
                        <AnimatePresence>
                            <motion.div
                                layout
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}
                            >
                                {displayedAchievements.length > 0 ? (
                                    displayedAchievements.map((achievement, index) => (
                                        <motion.article
                                            key={achievement.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="glass"
                                            style={{
                                                borderRadius: '15px',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            whileHover={{ transform: 'translateY(-10px)' }}
                                        >
                                            <div style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                                                <img
                                                    src={`/achievements/${achievement.image}`}
                                                    alt={achievement.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    loading="lazy"
                                                />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    right: '10px',
                                                    backgroundColor: 'var(--primary-color)',
                                                    color: 'white',
                                                    padding: '8px 12px',
                                                    borderRadius: '8px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600'
                                                }}>
                                                    {achievement.category}
                                                </div>
                                            </div>
                                            <div style={{ padding: '25px' }}>
                                                <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>
                                                    {achievement.title}
                                                </h3>
                                                <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.5', fontSize: '0.95rem' }}>
                                                    {achievement.description}
                                                </p>
                                                {achievement.date && (
                                                    <p style={{ color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: '500' }}>
                                                        📅 {new Date(achievement.date).toLocaleDateString()}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.article>
                                    ))
                                ) : (
                                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)' }}>
                                        <p style={{ fontSize: '1.1rem' }}>No achievements found. Try a different search or filter.</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* See More Button */}
                        {filteredAchievements.length > ITEMS_PER_CATEGORY && (
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="btn btn-primary"
                                    style={{
                                        padding: '12px 32px',
                                        borderRadius: '25px',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {showAll ? 'Show Less' : 'See More'}
                                </button>
                            </div>
                        )}
                    </>
                )}

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ display: 'inline-block' }}
                        >
                            <Zap size={40} style={{ color: 'var(--primary-color)' }} />
                        </motion.div>
                        <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>Loading achievements...</p>
                    </div>
                ) : achievements.length === 0 && !loading ? (
                    emptyState
                ) : null}
            </div>
        </section>
    );
};

export default Achievements;
