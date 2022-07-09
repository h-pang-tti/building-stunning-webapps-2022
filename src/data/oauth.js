import IdentityManager from '@arcgis/core/identity/IdentityManager';
import OAuthInfo from '@arcgis/core/identity/OAuthInfo';
import Portal from '@arcgis/core/portal/Portal';

/**
 * Register application ID and Portal URL
 * with the IdentityManager
 * @param appId
 * @param portalUrl
 * @returns Promise<void>
 */
export const initialize = async (appId) => {};

/**
 * Check current logged in status for current portal
 * @returns Promise<void>
 */
export const checkCurrentStatus = async (oauthInfo) => {};

/**
 * Attempt to sign in,
 * first check current status
 * if not signed in, then go through
 * steps to get credentials
 * @returns Promise<`esri/identity/Credential`>
 */
export const signIn = async (oauthInfo) => {};

/**
 * Sign the user out, but if we checked credentials
 * manually, make sure they are registered with
 * IdentityManager, so it can destroy them properly
 * @returns Promise<void>
 */
export const signOut = async (oauthInfo) => {};

/**
 * Get the credentials for the provided portal
 * @returns Promise<`esri/identity/Credential`>
 */
export const fetchCredentials = async (oauthInfo) => {};

export const fetchUser = async (credential) => {};
