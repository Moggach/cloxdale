import NewsTicker from "react-advanced-news-ticker";


const SearchHistory = ({ searchItem }) => {
    console.log(searchItem)

    return (
        <>
        
            <h3>
                CHECK OUT CAMERON&apos;S LIVE INTERNET SEARCH HISTORY
            </h3>
            <NewsTicker
                speed={2000} autoStart={true}>   {searchItem.map((item, index) => (
                    <div key={index}>{item.text}</div>
                  ))}
            </NewsTicker>
        </>
    );
};

export default SearchHistory;
