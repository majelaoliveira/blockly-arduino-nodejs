/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { FlyoutSeparator } from '../flyout_separator.js';
import type { IFocusableNode } from '../interfaces/i_focusable_node.js';
import type { INavigationPolicy } from '../interfaces/i_navigation_policy.js';
/**
 * Set of rules controlling keyboard navigation from a flyout separator.
 * This is a no-op placeholder, since flyout separators can't be navigated to.
 */
export declare class FlyoutSeparatorNavigationPolicy implements INavigationPolicy<FlyoutSeparator> {
    getFirstChild(_current: FlyoutSeparator): IFocusableNode | null;
    getParent(_current: FlyoutSeparator): IFocusableNode | null;
    getNextSibling(_current: FlyoutSeparator): IFocusableNode | null;
    getPreviousSibling(_current: FlyoutSeparator): IFocusableNode | null;
    /**
     * Returns whether or not the given flyout separator can be navigated to.
     *
     * @param _current The instance to check for navigability.
     * @returns False.
     */
    isNavigable(_current: FlyoutSeparator): boolean;
    /**
     * Returns whether the given object can be navigated from by this policy.
     *
     * @param current The object to check if this policy applies to.
     * @returns True if the object is a FlyoutSeparator.
     */
    isApplicable(current: any): current is FlyoutSeparator;
}
//# sourceMappingURL=flyout_separator_navigation_policy.d.ts.map