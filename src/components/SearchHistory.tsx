import NewsTicker from "react-advanced-news-ticker";


const SearchHistory = () => {


    return (
        <>
            <h2 className="text-2xl font-bold mb-4">
                CHECK OUT CAMERON'S LIVE INTERNET SEARCH HISTORY
            </h2>
            <NewsTicker
                speed={2000} autoStart={true}>
                <div>Etiam imperdiet volutpat libero eu tristique.</div>
                <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
                <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
                <div>Nunc ultrices tortor eu massa placerat posuere.</div>
            </NewsTicker>
        </>
    );
};

export default SearchHistory;
