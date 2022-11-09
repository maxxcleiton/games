import mixings from "src/assets/styles/mixins";
import styled from "styled-components";

export const TopRatedTitle = styled.h2`
	font-size: 20px;
	margin-bottom: 10px;
`;

export const Row = styled.div`
	height: calc(100% - 30px);
	width: 100%;
	display: flex;
	overflow-x: auto;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	&::-webkit-scrollbar-track {
		background-color: ${mixings.colors.baseBg1Dark};
	}
	&::-webkit-scrollbar {
		width: 20px;
		background: ${mixings.colors.baseBg2Dark};
	}
	&::-webkit-scrollbar-thumb {
		background: ${mixings.colors.baseBg2Dark};
		border-radius: 20px;
	}
`;

export const TopRatedConteiner = styled.div`
	box-shadow: inset 0 0 0.25rem 0.5rem ${mixings.colors.contrast0}22;
	width: 100%;
	min-height: 50vh;
	display: flex;
	overflow-x: hidden;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	padding: 2rem;
	border-radius: 8px;
`;

export const ArrowBack = styled.div`
	font-size: 40px;
	border: solid 1px #fff;
	border: none;
	cursor: pointer;
`;
export const ArrowFoward = styled.div`
	font-size: 40px;
	border: solid 1px #fff;
	border: none;
	cursor: pointer;
`;
