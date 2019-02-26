import propTypes from 'prop-types'
import styled from 'styled-components';

const sizes = {
  small: 1,
  medium: 3,
  large: 4,
  default: 2
};

function getSize(size) {
  return size in sizes ? sizes[size] * 16 : sizes.default * 16;
}

export const Avatar = styled.img`
  width: ${props => getSize(props.size)}px;
  height: ${props => getSize(props.size)}px;
  border-radius: ${props => props.rounded && "50px"};
`;

Avatar.propTypes = {

}
