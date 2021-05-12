import * as React from "react";
import $ from "./SearchFilters.module.scss";

import { IconHolder } from "@components/IconHolder/IconHolder";

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
			<div className={$.row}>
				<IconHolder iconPath="/building.svg" width="30px"></IconHolder>
				<div className={$.filter_name}>용도별</div>
				<div className={$.filter_description}>주거형태로 검색합니다</div>
			</div>

			<div className={$.row}>
				<IconHolder iconPath="/coin500.svg" width="30px"></IconHolder>
				<div className={$.filter_name}>최저입찰가별</div>
				<div className={$.filter_description}>최저입찰가로 검색합니다</div>
			</div>

			<div className={$.row}>
				<IconHolder iconPath="/calendar.svg" width="30px"></IconHolder>
				<div className={$.filter_name}>입찰기간별</div>
				<div className={$.filter_description}>입찰기간으로 검색합니다</div>
			</div>

			<div className={$.row}>
				<IconHolder iconPath="/tag.svg" width="30px"></IconHolder>
				<div className={$.filter_name}>물건명별</div>
				<div className={$.filter_description}>물건명으로 검색합니다</div>
			</div>

			<div className={$.row}>
				<IconHolder iconPath="/pinonmap.svg" width="30px"></IconHolder>
				<div className={$.filter_name}>구주소</div>
				<div className={$.filter_description}>구주소로 검색합니다</div>
			</div>

			<div className={$.row}>
				<IconHolder iconPath="/pinonroad.svg" width="30px"></IconHolder>
				<div className={$.filter_name}>도로명주소</div>
				<div className={$.filter_description}>도로명주소로 검색합니다</div>
			</div>
		</div>
	);
};
