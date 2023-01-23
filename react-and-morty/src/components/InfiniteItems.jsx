
import { useState, useEffect } from "react";

const InfiniteItems = ({baseUrl, createChild, currentPage, setCurrentPage}) => {
    const [items, setItems] = useState([]);
    const [loadText, setLoadText] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchCharacters(currentPage);
      }, [currentPage]);
    
    const fetchCharacters = (page) => {
        fetch(`${baseUrl}${page}`)
        .then(res => res.json())
        .then(res => {
            setItems([...items, ...res.results]);
            setIsFetching(false);
            setLoadText(null);
        });
    };

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (isFetching) {
            return;
        };
        
        if (scrollTop + clientHeight >= scrollHeight && currentPage < 42) {
            setCurrentPage(currentPage + 1);
            setLoadText("Loading...");
        } else if (currentPage >= 42) {
            setLoadText("No more characters");
        };
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    }, [isFetching, currentPage]);


  return (
    <div>
    <div className="character-list">
        {items.length > 0 && items.map(item => createChild(item))}
    </div>
    <div id="loading-text">{loadText}</div>
    </div>
  )
}

export default InfiniteItems;
