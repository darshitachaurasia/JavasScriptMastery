

function createPermissionManager() {
  const permissions = {
    admin: ['create', 'edit', 'delete', 'view'],
    editor: ['edit', 'view'],
    viewer: ['view']
  };

  return {
    hasPermission: (role, action) => permissions[role]?.includes(action) || false
  };
}

// Usage
const permissionManager = createPermissionManager();
console.log(permissionManager.hasPermission('editor', 'edit')); // true
console.log(permissionManager.hasPermission('viewer', 'edit')); // false

  

  