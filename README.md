# build-pilot-route

Manually encode an execution route for Zodiac Pilot

## Use as GitHub Codespace

Follow these steps to open this sample in a Codespace:

- Click the **Code** drop-down menu.
- Click on the **Codespaces** tab.
- Click **Create codespace on main**.

For more info, check out the [GitHub documentation](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace).

## Edit route

Open the [main.ts](./main.ts) file to start editing the route.

- As first argument of `buildRoute` set the chain ID for the route
- The second argument is an array that defines the route's waypoints, starting with the initiating signer EAO and ending at the avatar Safe address
- Let IntelliSense help you with completing the waypoints' properties

Each waypoint carries its account address under a key identifying the type of the waypoint:

```
{
    [<type>]: "<address>",

    <...properties>
}
```

Supported types are: `EOA`, `SAFE`, `ROLES`, `DELAY`

## Load route into Zodiac Pilot

Once you've completed the route specification in main.ts, run `bun start` on the terminal (or use the provided `Run` VSCode launch task).

This prints a link to the console. Open it using cmd+click.

When the route shows in the Zodiac Pilot app, make sure you open the Pilot extension panel, edit the route label and click **Save**.
