/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Coordinate } from '../utils/coordinate.js';
import { Rect } from '../utils/rect.js';
import { Size } from '../utils/size.js';
import { WorkspaceSvg } from '../workspace_svg.js';
import { Bubble } from './bubble.js';
/**
 * A bubble that displays editable text. It can also be resized by the user.
 * Used by the comment icon.
 */
export declare class TextInputBubble extends Bubble {
    readonly workspace: WorkspaceSvg;
    protected anchor: Coordinate;
    protected ownerRect?: Rect | undefined;
    /** The root of the elements specific to the text element. */
    private inputRoot;
    /** The text input area element. */
    private textArea;
    /** The group containing the lines indicating the bubble is resizable. */
    private resizeGroup;
    /**
     * Event data associated with the listener for pointer up events on the
     * resize group.
     */
    private resizePointerUpListener;
    /**
     * Event data associated with the listener for pointer move events on the
     * resize group.
     */
    private resizePointerMoveListener;
    /** Functions listening for changes to the text of this bubble. */
    private textChangeListeners;
    /** Functions listening for changes to the size of this bubble. */
    private sizeChangeListeners;
    /** Functions listening for changes to the location of this bubble. */
    private locationChangeListeners;
    /** The text of this bubble. */
    private text;
    /** The default size of this bubble, including borders. */
    private readonly DEFAULT_SIZE;
    /** The minimum size of this bubble, including borders. */
    private readonly MIN_SIZE;
    private editable;
    /**
     * @param workspace The workspace this bubble belongs to.
     * @param anchor The anchor location of the thing this bubble is attached to.
     *     The tail of the bubble will point to this location.
     * @param ownerRect An optional rect we don't want the bubble to overlap with
     *     when automatically positioning.
     */
    constructor(workspace: WorkspaceSvg, anchor: Coordinate, ownerRect?: Rect | undefined);
    /** @returns the text of this bubble. */
    getText(): string;
    /** Sets the text of this bubble. Calls change listeners. */
    setText(text: string): void;
    /** Sets whether or not the text in the bubble is editable. */
    setEditable(editable: boolean): void;
    /** Returns whether or not the text in the bubble is editable. */
    isEditable(): boolean;
    /** Adds a change listener to be notified when this bubble's text changes. */
    addTextChangeListener(listener: () => void): void;
    /** Adds a change listener to be notified when this bubble's size changes. */
    addSizeChangeListener(listener: () => void): void;
    /** Adds a change listener to be notified when this bubble's location changes. */
    addLocationChangeListener(listener: () => void): void;
    /** Creates and returns the editable text area for this bubble's editor. */
    private static createTextArea;
    /** Creates and returns the UI container element for this bubble's editor. */
    private createEditor;
    /** Binds events to the text area element. */
    private bindTextAreaEvents;
    /** Creates the resize handler elements and binds events to them. */
    private createResizeHandle;
    /**
     * Sets the size of this bubble, including the border.
     *
     * @param size Sets the size of this bubble, including the border.
     * @param relayout If true, reposition the bubble from scratch so that it is
     *     optimally visible. If false, reposition it so it maintains the same
     *     position relative to the anchor.
     */
    setSize(size: Size, relayout?: boolean): void;
    /** @returns the size of this bubble. */
    getSize(): Size;
    moveDuringDrag(newLoc: Coordinate): void;
    setPositionRelativeToAnchor(left: number, top: number): void;
    protected positionByRect(rect?: Rect): void;
    /** Handles mouse down events on the resize target. */
    private onResizePointerDown;
    /** Handles pointer up events on the resize target. */
    private onResizePointerUp;
    /** Handles pointer move events on the resize target. */
    private onResizePointerMove;
    /** Handles a text change event for the text area. Calls event listeners. */
    private onTextChange;
    /** Handles a size change event for the text area. Calls event listeners. */
    private onSizeChange;
    /** Handles a location change event for the text area. Calls event listeners. */
    private onLocationChange;
}
//# sourceMappingURL=textinput_bubble.d.ts.map