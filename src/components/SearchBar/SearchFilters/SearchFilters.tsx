import * as React from "react";
import $ from "./SearchFilters.module.scss";

type SearchFiltersProps = {
	isHidden: boolean;
};

export const SearchFilters: React.FC<SearchFiltersProps> = (
	props: SearchFiltersProps
) => {
	return (
		<div
			className={$.container}
			style={{ display: props.isHidden ? "none" : "flex" }}
		>
			<div></div>
		</div>
	);
};
