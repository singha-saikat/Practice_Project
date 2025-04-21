import React from 'react';
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion';


const Simple = () => {
    return (
        <motion.div
            className='bg-red-500 rounded-full w-32 h-32'
            initial={{opacity: 0,scale: 0}}
            animate={{opacity: 1,scale: 1}}
            transition={{duration:1}}
        />
        
    );
};

export default Simple;