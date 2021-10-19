/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import Button from '../button';
import { Heading } from '../heading';
import { HStack } from '../h-stack';
import { space } from '../ui/utils/space';
import { View } from '../view';
import ColorIndicator from '../color-indicator';
import InputControl from '../input-control';
import Item from '../item-group/item';
import {
	Container as InputControlContainer,
	Input,
	BackdropUI as InputBackdropUI,
} from '../input-control/styles/input-control-styles';

export const ColorIndicatorStyled = styled( ColorIndicator )`
	&& {
		display: block;
		border-radius: 50%;
		border: 0;
		height: ${ space( 6 ) };
		width: ${ space( 6 ) };
		margin-left: 0;
		padding: 0;
	}
`;

export const ColorNameInputControl = styled( InputControl )`
	${ InputControlContainer } {
		background: #f0f0f0;
		border-radius: 2px;
		${ Input }${ Input }${ Input }${ Input } {
			width: 160px;
			height: 32px;
		}
		${ InputBackdropUI }${ InputBackdropUI }${ InputBackdropUI } {
			border-color: transparent;
			box-shadow: none;
		}
	}
`;

export const ColorItem = styled( Item )`
	padding: 3px 12px;
`;

export const ColorNameContainer = styled.span`
	line-height: 32px;
`;

export const ColorHeading = styled( Heading )`
	text-transform: uppercase;
	line-height: 24px;
	font-weight: 500;
	&&& {
		font-size: 11px;
		margin-bottom: 0;
	}
`;

export const ColorActionsContainer = styled( View )`
	height: 24px;
	display: flex;
`;

export const ColorHStackHeader = styled( HStack )`
	margin-bottom: ${ space( 2 ) };
`;

export const ColorEditStyles = styled( View )`
	&&& {
		.components-button.has-icon {
		min-width: 0;
		padding: 0 2px;
	}
`;

export const DoneButton = styled( Button )`
	&& {
		color: #3858e9;
	}
`;
