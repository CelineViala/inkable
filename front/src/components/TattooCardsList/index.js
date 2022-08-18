import './index.scss';
import TattooCard from "../Card";
import data from '../../data';
// console.log(data);


const TattooCardsList = () => {
    return (
        <div className="tattooCardContent">
        {data.map((card) => (
					<TattooCard key={ card.id } infos={ card } />
		))}
        </div>
    )
};

export default TattooCardsList;