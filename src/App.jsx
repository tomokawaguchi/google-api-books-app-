import { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import Banner from "./components/Banner/Banner";
import SearchNotFound from "./components/SearchNotFound/SearchNotFound";
import BooksGroup from "./components/BooksGroup/BooksGroup";
import Button from "../src/components/Button/Button";
import Footer from "../src/components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import SectionSingleWrapper from "./containers/SectionSingleWrapper/SectionSingleWrapper";
import SectionColsWrapper from "./containers/SectionColsWrapper/SectionColsWrapper";
import Searching from "./components/Searching/Searching";
import Modal from "./components/Modal/Modal";
import ResultStyleToggle from "./containers/ResultStyleToggle/ResultStyleToggle";
import OrderSwitch from "./components/OrderSwitch/OrderSwitch";

// API
const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes?q=";
const defaultKeyword = "sydney";

const App = () => {
    // For loading screen
    const [isLoading, setIsLoading] = useState(true);
    let isLoadingMore = useRef(false);

    // For the book data state
    const [bookData, setBookData] = useState([]);
    let prevBookData = useRef([]);

    // For the total item state
    const [total, setTotal] = useState(0);

    // For the search input keyword
    let [searchKeyword, setSearchKeyword] = useState(defaultKeyword);
    let prevSearchKeyword = useRef("");

    // For the layout change
    const [isGrid, setIsGrid] = useState(true);

    // For the layout change
    const [isRelevant, setIsRelevant] = useState(true);
    let order = useRef("relevance"); // relevance or newest

    // For the modal open/close state
    const [isModalOpen, setIsModalOpen] = useState(false);
    let currentBookId = useRef(""); // The book ID for the modal

    let firstIndex = useRef(0); // The index of the initial Books at every page
    const searchBtn = useRef(); // Search btn
    const searchInput = useRef(); // Search Input

    // Fetching data from Google API
    const fetchBooks = async (currentKeyword, clickedBtn = "") => {
        try {
            // Set to fetch 12 books every request
            // The index of the first books at every page is managed with firstIndex state
            const response = await fetch(
                `${GOOGLE_BOOKS_API}${currentKeyword}&orderBy=${order.current}&printType=books&startIndex=${firstIndex.current}&&maxResults=12`,
            );
            const jsonPromises = await response.json();
            const { items, totalItems } = jsonPromises;

            // Update the total items state
            setTotal(totalItems);

            // Assigning obtained data to respective state variables
            if (clickedBtn === "loadMore") {
                setBookData((prevState) => {
                    prevBookData.current = prevState;
                    return [...prevState, ...items];
                });
            } else {
                setBookData((prevState) => {
                    prevBookData.current = prevState;
                    return items === undefined ? [] : [...items];
                });
            }
        } catch (e) {
            console.log(e);
        } finally {
            // Update the loading state -> UI switches from loading to Books list / Not Found
            setIsLoading(false);
            isLoadingMore.current = false;
        }
    };

    // Only run once on the initial render()
    useEffect(() => {
        // Set the default value in the input field for the user
        searchInput.current.value = defaultKeyword;
        // Set the loading to be tue and call api
        setIsLoading(true);
        fetchBooks(searchKeyword);
    }, []);

    // To handle search click -> track if search btn is clicked or not (API call trigger)
    const handleSearchClick = (keyword) => {
        // If the keyword exist, use it for the new search
        const keywordToSearch = keyword || searchKeyword;
        // If the search keywords are different from previous, do the search otherwise do nothing
        if (keywordToSearch !== prevSearchKeyword.current) {
            setIsLoading(true);
            fetchBooks(keywordToSearch, "search");
        }
    };

    // To handle onBlur() to get the latest search keyword
    const handleOnBlur = () => {
        // Set the new key word and store the previous keyword in the local variable
        setSearchKeyword((prevState) => {
            prevSearchKeyword.current = prevState;
            return searchInput.current.value;
        });
    };

    // To handle enter key to trigger search
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            // Trigger blur and click event
            handleOnBlur();
            // Passing the current value of search input
            // rerender happens after click event -> pass the latest input value here
            handleSearchClick(searchInput.current.value);
        }
    };

    // Handle load more btn -> Fetch additional books
    const handleLoadMoreClick = () => {
        // Increase index by 12 --> showcasing 12 additional per load more click
        firstIndex.current += 12;
        setIsLoading(true);
        isLoadingMore.current = true; // For the blurred bg
        fetchBooks(searchKeyword, "loadMore");
    };

    // To handle icon click to switch style
    const handleIconClick = (style) => {
        style === "list" ? setIsGrid(false) : setIsGrid(true);
    };

    // To handle keyword state update & search field reset
    const handleSearchFieldReset = () => {
        searchInput.current.value = "";
    };

    // To handle modal open
    const handleModalOpen = (bookId) => {
        currentBookId.current = bookData.find((each) => each.id === bookId);
        setIsModalOpen(true);
    };

    // To handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // To handle switching between relevance/newest
    const handleOrderSwitch = (selectedOrder) => {
        // Update the state based on the selected order
        if (selectedOrder === "relevance") {
            order.current = selectedOrder;
            setIsRelevant(true);
        } else {
            order.current = selectedOrder;
            setIsRelevant(false);
        }

        // Fetch the data with the selected order parameter
        setIsLoading(true);
        isLoadingMore.current = true;
        fetchBooks(searchKeyword);
    };

    console.log("bookData.length: ", bookData.length);

    return (
        <div className={styles.App}>
            <Banner />
            <SectionColsWrapper>
                <SearchBar
                    searchClick={handleSearchClick}
                    searchKeypress={handleKeyPress}
                    searchReset={handleSearchFieldReset}
                    handleOnBlur={handleOnBlur}
                    searchBtn={searchBtn}
                    searchInput={searchInput}
                />
                <OrderSwitch
                    isRelevant={isRelevant}
                    handleOrderSwitch={handleOrderSwitch}
                />
            </SectionColsWrapper>
            <ResultStyleToggle
                isGrid={isGrid}
                numOfResults={total}
                iconClick={handleIconClick}
            />
            <SectionSingleWrapper>
                {isLoading ? (
                    <Searching
                        data={bookData}
                        isGrid={isGrid}
                        isLoadingMore={isLoadingMore.current}
                    />
                ) : bookData.length && bookData !== "undefined" ? (
                    <>
                        <BooksGroup
                            data={bookData}
                            isGrid={isGrid}
                            openModal={handleModalOpen}
                        />
                        <Modal
                            currentBook={currentBookId.current}
                            modalState={isModalOpen}
                            closeModal={handleModalClose}
                        />
                    </>
                ) : (
                    <SearchNotFound searchedKeyword={searchKeyword} />
                )}
            </SectionSingleWrapper>
            {bookData.length % 12 !== 0 || bookData.length === 0 ? (
                <></>
            ) : (
                <SectionSingleWrapper>
                    <Button
                        btnColor="black"
                        btnText="Load more"
                        clickToLoad={handleLoadMoreClick}
                    />
                </SectionSingleWrapper>
            )}
            <Footer />
        </div>
    );
};

export default App;
