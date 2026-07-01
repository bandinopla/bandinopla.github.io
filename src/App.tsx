import { useState, useMemo } from 'react';
import { MOCK_DATA } from './data';
import { Category, type MediaItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MediaRow } from './components/MediaRow';
import { MediaModal } from './components/MediaModal';
import { AboutSection } from './components/AboutSection';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Derive Hero item (first item with a heroCoverUrl)
  const heroItem = useMemo(() => {
    return MOCK_DATA.find(item => item.heroCoverUrl) || MOCK_DATA[0];
  }, []);

  // Filter data based on search query across multiple fields
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return MOCK_DATA;
    
    const query = searchQuery.toLowerCase();
    return MOCK_DATA.filter(item => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.longDescription.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.links.some(
          l => 
            l.caption.toLowerCase().includes(query) || 
            (l.description && l.description.toLowerCase().includes(query))
        )
      );
    });
  }, [searchQuery]);

  // Group items by category for row display
  const groupedByCategory = useMemo(() => {
    const categories = Object.values(Category);
    return categories.map(cat => ({
      category: cat,
      items: filteredData.filter(item => item.category === cat)
    })).filter(group => group.items.length > 0);
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white overflow-x-hidden selection:bg-red-600 selection:text-white">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* If there's a search query, show a grid instead of the hero + rows */}
      {searchQuery.trim() ? (
        <div className="pt-24 px-4 md:px-12 max-w-[1920px] mx-auto">
          <h2 className="text-zinc-400 mb-6 text-xl">
            Search Results for "{searchQuery}"
          </h2>
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              {filteredData.map(item => (
                 <div 
                 key={item.id} 
                 className="relative w-full cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30 origin-center group/card"
                 onClick={() => setSelectedItem(item)}
               >
                 <div className="aspect-video bg-zinc-800 rounded overflow-hidden">
                   <img 
                     src={item.thumbnailUrl} 
                     alt={item.title} 
                     className="w-full h-full object-cover"
                     loading="lazy"
                   />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded flex items-end p-4">
                   <p className="text-white font-medium text-sm drop-shadow-md">{item.title}</p>
                 </div>
               </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-zinc-500">
              <p className="text-2xl mb-2">No matches found.</p>
              <p>Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <Hero item={heroItem} onMoreInfo={setSelectedItem} />
          
          <div className="md:-mt-20 lg:-mt-32 relative z-20 pb-8 space-y-6 md:space-y-8">
            {groupedByCategory.map(group => (
              <MediaRow 
                key={group.category} 
                title={group.category} 
                items={group.items} 
                onItemClick={setSelectedItem}
              />
            ))}
          </div>
        </>
      )}

      {/* About Section */}
      <AboutSection />

      {/* Detail Modal */}
      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
