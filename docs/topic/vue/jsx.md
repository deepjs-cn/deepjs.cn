# JSX in Vue

参考

- https://cn.vuejs.org/v2/guide/render-function.html
- https://github.com/vuejs/babel-plugin-transform-vue-jsx
- https://alligator.io/vuejs/jsx-render-functions/
- https://stackoverflow.com/questions/46365672/on-click-function-in-vue-tables-2-throwing-fns-apply-is-not-a-function
- https://github.com/framework7io/framework7/blob/master/packages/vue/components/app.js

<!-- | Binding Type | Vue | Templates | JSX |
|------ |:-----:| -----:| ----:|
| Strings | `prop="attr"` | `prop="attr"` (The same) |
| Expressions | `:prop="binding"` | `prop={binding}` |
| Objects in bindings | `:prop="{key: value}"` | `prop={{key: value}}` (For clarity) |
| Event bindings | `@event="handler($event)"`, `v-on:event="handler"` | `onEvent="handler"` (Arguments can be supplied by way of `func.bind()`) |
| HTML Interpolation | `v-html="htmlContent"` | `domPropsInnerHTML={htmlContent}` (Non-attribute DOM properties have a domProps prefix) |
| Expression Interpolation | `{{object}}` | `{object}` (Can be nested, like so: `<ul>{list.map(item => <li>{item}</li>)}</ul>`) | -->

下面以大量的示例，展示JSX的用法

```jsx
// SocialLogin
render(h) {
    // https://alligator.io/vuejs/jsx-render-functions/
    const typesMap = {
      wechat: '微信',
      qq: 'QQ',
      alipay: '支付宝',
    };
    const items = this.$props.types.map(item => {
      return (
        <div class="oauth-btn" onClick={this.goOauth.bind(this, item)}>
          <span class="oauth-btn-icon">{<Icon type={item} />}</span>
          <span class="oauth-btn-text">{typesMap[item]}</span>
        </div>
      );
    });
    return <div class="social-login">{items}</div>;
  },
```

```jsx
// Icon
render(h) {
  // const $default = this.$slots.default
  // const $data = $default.$data
  const { mode } = this.$props;
  // const { mode, ...props } = this.$props

  let iconNode = null;
  // 这里如何塞入 slot 呢
  switch (mode) {
    case 'font': {
      // 通过{}实现块区域，隔离 const 变量
      const { classes, styles } = this;
      iconNode = <i class={classes} style={styles} />;
      break;
    }
    // case 'canvas': {
    //   iconNode = 'IconCanvas'
    //   break
    // }
    case 'custom': {
      // 通过 css 实现的icon
      const { classes } = this;
      const { size } = this.$props;
      const styles = {
        transform: size ? `scale(${size})` : false,
      };
      iconNode = <span class={classes} style={styles} />;
      break;
    }
    case 'svg':
    default: {
      const { classes, svgStyles, iconType } = this;
      iconNode = (
        <svg
          class={classes}
          style={svgStyles}
          title={iconType}
          aria-hidden="true">
          <use xlinkHref={iconType} />
        </svg>
      );
    }
  }

  return iconNode;
},
```

```jsx

```
