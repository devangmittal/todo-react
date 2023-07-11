import { useEffect, useState } from "react";
const Card = ({ text, handleDelete, handleEdit }) =>
{
	let [flag, setFlag] = useState(false);
	let [value, setValue] = useState();

	const handleUpdate = (e) =>
	{
		setValue(e.target.value);
		text = value;
	}
	return (
		<div className="child">
			<p>
				<span><input type="text" value={text} onChange={handleUpdate} /></span>
				<span>
					<button onClick={() => handleDelete(text)}>delete</button>
					{
						flag == false ?
							<button onClick={() => setFlag(true)}>edit</button> :
							<div><input type="text" onChange={handleUpdate}></input><button onClick={() =>
							{
								setFlag(false);
								handleEdit(text, value);
							}}>Update</button>
							</div>}
				</span>
			</p>
		</div >
	);
}
export default Card;
