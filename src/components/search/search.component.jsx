import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import SearchDropdown from "../search-drop-down/search-drop-down.component";
import {
  SearchResultItem,
  SearchResults,
  SearchInput,
  BackDropStyle,
} from "./search.styles";
import { Link } from "react-router-dom";

const Search = () => {


  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [select, setSelect] = useState("batman");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const metasMap = useSelector(selectCategoriesMap);

  const onSeachHandler = (e) => {
    setSearch(e.target.value);
  };

  const item = metasMap[select]?.filter((item) =>
    item?.title?.toLowerCase()?.includes(search.toLowerCase()),
  );

  return (
    <div style={{ display: "flex" }}>
      {isSearchOpen && (
        <BackDropStyle onClick={() => setIsSearchOpen(false)}></BackDropStyle>
      )}
      <SearchDropdown select={select} handleSelect={handleSelect} />
      <div>
        <SearchInput
          placeholder="Search..."
          type="search"
          value={search}
          onChange={onSeachHandler}
          onFocus={() => setIsSearchOpen(true)}
        />
        {isSearchOpen && (
          <SearchResults>
            {search?.trim() &&
              item?.map((ele) => (
                <SearchResultItem>
                  <Link
                    onClick={() => setIsSearchOpen(false)}
                    to={`/shop/${ele?.character?.toLowerCase()}/${ele?.slug}`}
                  >
                    {ele.title}
                  </Link>
                </SearchResultItem>
              ))}
          </SearchResults>
        )}
      </div>
    </div>
  );
};

export default Search;
