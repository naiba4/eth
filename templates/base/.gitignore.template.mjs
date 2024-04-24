const contents = () => 
`# dependencies
node_modules

# yarn
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

# eslint
.eslintcache

# misc
.DS_Store

# IDE
.vscode
.idea

# cli
dist`;

export default contents
