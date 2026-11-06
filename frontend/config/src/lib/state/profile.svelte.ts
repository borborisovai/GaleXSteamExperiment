// The Steam config document edits one selected profile; sync locking is handled
// by Gale itself. This shim satisfies upstream components without pulling the
// whole desktop profile store into the browser bundle.
const profiles = { activeId: 0, active: null as any, list: [] as any[], activeLocked: false, activeInstallAndConfigLocked: false };
export default profiles;
