import { Suspense } from "react";
import Card from "./Card";
import FallbackCard from "./FallbackCard";

const List = ({ list, type }) => {
    return (
        <div className="flex w-full flex-wrap justify-evenly">
            {list.map((element) => (
                <Suspense key={element.id} fallback={<FallbackCard />}>
                    <Card element={element} type={type} key={element.id} />
                </Suspense>
            ))}
        </div>
    );
};

export default List;
