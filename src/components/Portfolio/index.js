import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    return(
        <div>
            <h1><AnimatedLetters strArray={"Portfolio".split('')} startIdx={1}/></h1>
            <Loader type="line-scale" color="#fed002" width={500} />
        </div>
    );
}

export default Portfolio;