import React from 'react';
import Arrow from "./Arrow";

const Arrows = () => {
    return (
        <>
            <Arrow width={200} translateX={-180} translateY={50} rotate={-185}/>
            <Arrow width={200} translateX={-190} translateY={65} rotate={-5}/>
            <Arrow width={200} translateX={170} translateY={50} rotate={5}/>
            <Arrow width={200} translateX={180} translateY={65} rotate={185}/>
            <Arrow width={250} translateX={-180} translateY={150} rotate={-200}/>
            <Arrow width={250} translateX={-195} translateY={140} rotate={-20}/>
            <Arrow width={250} translateX={195} translateY={140} rotate={200}/>
            <Arrow width={250} translateX={180} translateY={150} rotate={20}/>
            <Arrow width={227} translateX={0} translateY={220} rotate={90}/>
            <Arrow width={60} translateX={30} translateY={130} rotate={90}/>
            <Arrow width={60} translateX={-30} translateY={130} rotate={90}/>
            <Arrow width={50} translateX={-30} translateY={310} rotate={90}/>
            <Arrow width={15} translateX={30} translateY={270} rotate={90}/>
            <Arrow width={25} translateX={30} translateY={327} rotate={90}/>
            <Arrow width={15} translateX={-15} translateY={415} rotate={-90}/>
            <Arrow width={15} translateX={15} translateY={400} rotate={90}/>
            <Arrow width={15} translateX={360} translateY={145} rotate={-90}/>
            <Arrow width={15} translateX={375} translateY={130} rotate={90}/>
            <Arrow width={15} translateX={-365} translateY={330} rotate={90}/>
            <Arrow width={180} translateX={-220} translateY={330} rotate={12}/>
            <Arrow width={200} translateX={-210} translateY={390} rotate={0}/>
        </>
    );
};

export default Arrows;