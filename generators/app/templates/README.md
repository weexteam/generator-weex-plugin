# <%= projectName %>
<%= projectName %> is a weex plugin that can easily be integrated with `weexpack` to extend weex functionality.

## Installing the plugin in your project
### Using `weexpack`:
```
weex plugin add <%= projectName %>
```

### Manual integration:
#### iOS:
```
pod '<%= iOSProjectName %>'
```

#### Android:
Add the following line to the dependencies list in the build.gradle file for the corresponding project.
```
 compile '${groupId}:<%= AndroidProjectName %>:{$version}'
```
> Note: You need to specify the groupId and $version of the project.

#### Web integration
```
 npm install <%= projectName %>
```

## Developing the plugin

See [How to develop](./doc/how-to-develop.md).

also,

See the [Plugin Development Guide](https://weex.apache.org/guide/create-a-plugin.html).