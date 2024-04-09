import {ReactNode} from "react";

export const Wrapper = ({children}: {children: ReactNode}) => {
	return <div className="mx-[15%]">{children}</div>;
};
