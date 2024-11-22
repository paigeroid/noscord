<table>
<tr><td>

adds a new listener to prefix command run events<br>

<table>

<tr><td> JS </td></tr>

<tr><td>

```js
client.onPrefix(async (ctx) => {       
    console.log("any command has been run");
});   

client.onPrefix("my_command", async (ctx) => {       
    console.log("my command has been run");
});   
```

</td></tr>
</table>

</td><td> 

`Function` `Sync`

</td><td>

- [src / Client / custard / onPrefix.js](https://github.com/shysolocup/noscord.js/blob/main/src/Client/custard/onPrefix.js)

</td></tr>

</table>

<table>
<tr>

<td>

#### Arguments:
> - *?name* `String`<br>
> specific command name to listen for<br>
>
> - *callback* `Function`<br>
> callback ran when the event is fired
> <br>

<br>

</td>

</table>

<br> <h1> [🢀 Back](https://github.com/shysolocup/noscord.js/wiki/Client-Elements) </h1>