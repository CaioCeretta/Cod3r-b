import { myName } from "@urna/core";
import Page from "@/components/shared/Page";

export default function Home() {
	return <div>{myName()}</div>;
}
