# Lost Password

If you have lost your Scrypted username or password but still have administrator access on the hosting server, you can reset all users by doing the following:

Using the terminal, create an empty file depending on your platform:

::: code-group

```[Docker Compose]
touch ~/.scrypted/volume/reset-login
```

```[Linux]
touch ~/.scrypted/volume/reset-login
```

```[Mac]
touch ~/.scrypted/volume/reset-login
```

```[Windows]
Replace `USERNAME` with your username.
type nul > C:\Users\USERNAME\.scrypted\volume\reset-login
```

:::

Reload the Scrypted login page to be prompted to create a new administrator account.

These steps will keep your configuration intact, and only reset the users.