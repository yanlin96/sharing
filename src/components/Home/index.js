import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    return(
        <div className='home-page'>
            <h1>
                <AnimatedLetters strArray={"Jenny's Portfolio".split('')} startIdx={1}/>
                <br />
                <AnimatedLetters strArray={"Front End Dev".split('')} startIdx={18}/>
            </h1>
            <Loader type="line-scale" color="#fed002" width={500} />
            <div className='img-container'>
                <img src="https://www.linkedin.com/in/ju-jenny-sun?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD8kqRcBlWiM1A61iLcODxg_qqzsYByqg1w&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bg%2BhbmzqEREaYXG805m7%2BUA%3D%3D" alt="image"/>
            </div>
        </div>
       
    );
}

export default Home;