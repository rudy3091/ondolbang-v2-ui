import * as React from "react";
import $ from "./SearchBar.module.scss";

import { IconHolder } from "@components/IconHolder/IconHolder";
import { SearchFilters } from "./SearchFilters/SearchFilters";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
	const [isHidden, setHidden] = React.useState<boolean>(true);
	const [isFilterHidden, setFilterHidden] = React.useState<boolean>(true);
	const className = isHidden
		? [$.input_container, $.hidden].join(" ")
		: $.input_container;

	return (
		<div
			className={$.container}
			style={{ backgroundColor: isHidden ? "" : "#f8f8f8" }}
		>
			<IconHolder
				iconPath="/search.svg"
				width="30px"
				height="30px"
				onClick={() => {
					if (!isFilterHidden) setFilterHidden(true);
					setHidden(!isHidden)
				}}
			></IconHolder>

			<div
				onClick={() => setFilterHidden(!isFilterHidden)}
				className={className}
			>
				<input
					className={$.input}
					type="text"
					placeholder={isHidden ? "" : "필터를 선택하세요"}
				/>
			</div>

			<SearchFilters isHidden={isFilterHidden}></SearchFilters>
		</div>
	);
};
