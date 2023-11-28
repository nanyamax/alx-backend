SHUTDOWN
Syntax
SHUTDOWN [NOSAVE | SAVE] [NOW] [FORCE] [ABORT]
Available since:
1.0.0
Time complexity:
O(N) when saving, where N is the total number of keys in all databases when saving data, otherwise O(1)
ACL categories:
@admin, @slow, @dangerous
The command behavior is the following:

If there are any replicas lagging behind in replication:
Pause clients attempting to write by performing a CLIENT PAUSE with the WRITE option.
Wait up to the configured shutdown-timeout (default 10 seconds) for replicas to catch up the replication offset.
Stop all the clients.
Perform a blocking SAVE if at least one save point is configured.
Flush the Append Only File if AOF is enabled.
Quit the server.
