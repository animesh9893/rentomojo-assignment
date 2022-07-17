import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function sortUp(objs){
	console.log(objs)
	objs.sort((a,b) => (a.score >= b.score) ? 1 : ((b.score > a.score) ? -1 : 0));
	return objs;
}


function sortDown(objs){
	console.log(objs)
	objs.sort((a,b) => (a.score <= b.score) ? 1 : ((b.score < a.score) ? -1 : 0));
	return objs;
}

export default function OperationBar({sortedUp,setSortedUp,...props}){
	function changeSort(){
		switch(sortedUp){
			case true:
				setSortedUp(false);props.setData(sortDown(props?.data));break;
			default:
				setSortedUp(true);props.setData(sortUp(props?.data));break;
		}

	}

	return (
		<div>
			<div>
				<Button variant="outlined" color="error">
					Reset Data
				</Button>
			</div>
			<div>
				<Button onClick={changeSort} variant={sortedUp==null ? "outlined":"contained"}>Sort By 
					{
						sortedUp!==null ? 
							sortedUp===true ? 
								<ArrowUpwardIcon fontSize="small"/>: 
								<ArrowDownwardIcon fontSize="small"/>
							:<div></div>
					}
				</Button>
			</div>
		</div>
	)
}