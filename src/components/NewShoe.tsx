'use client'

// import { useState } from "react";
import "./NewShoe.scss";
import { addShoe } from "@/utils/actions";

// interface Shoe {
//     type: string;
//     foot: string;
//     brand: string;
//     image: string;
//     size: number;
//     name: string;
// }

export default function NewShoe() {
    // const [shoe, setShoe] = useState<Shoe>({
    //     type: "",
    //     foot: "",
    //     brand: "",
    //     image: "",
    //     size: 0,
    //     name: "",
    // });

    const sizes = [];

    for (let i = 1; i <= 20; i++) {
        sizes.push(<option key={i} value={i}>{i}</option>);
        const j = i + .5;
        sizes.push(<option key={j} value={j}>{j}</option>);
    }


    return (
        <div className="new-shoe">
            <h2>Add a New Shoe</h2>
            <form action={addShoe}>
                <label htmlFor="name">Enter Shoe Name:</label>
                <input required type="text" name="name" id="name" placeholder="Name" />

                <label htmlFor="type">Enter Shoe Type:</label>
                <input required type="text" name="type" id="type" placeholder="Type" />

                <label htmlFor="brand">Enter Shoe Brand:</label>
                <input required type="text" name="brand" id="brand" placeholder="Brand" />

                <label htmlFor="image">Add an Image URL:</label>
                <input required type="text" name="image" id="image" placeholder="Image URL" />

                <label htmlFor="foot">Which Foot?</label>
                <select required name="foot" id="foot">
                    <option value="">--Please which foot--</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                </select>

                <label htmlFor="size">What Size?</label>
                <select required name="size" id="size">
                    <option value="">--Please choose a size--</option>
                    {sizes}
                </select>

                <button type="submit">OK</button>
            </form>
        </div>
    );
}