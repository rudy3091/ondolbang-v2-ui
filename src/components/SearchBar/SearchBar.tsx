import * as React from "react";
import $ from "./SearchBar.module.scss";

import { IconHolder } from "@components/IconHolder/IconHolder";

type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
	const [isHidden, setHidden] = React.useState<boolean>(true);
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
				onClick={() => setHidden(!isHidden)}
			></IconHolder>

			<div className={className}>
				<input className={$.input} type="text" />
			</div>
		</div>
	);
};
