#include <sqlite3.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *docStr = "ITU-Minitwit Tweet Flagging Tool\n\n"
               "Usage:\n"
               "  flag_tool <tweet_id>...\n"
               "  flag_tool -i\n"
               "  flag_tool -h\n"
               "Options:\n"
               "-h            Show this screen.\n"
               "-i            Dump all tweets and authors to STDOUT.\n";

static int callback(void *data, int argc, char **argv, char **azColName) {
  printf("%s,%s,%s,%s\n", argv[0] ? argv[0] : "NULL",
         argv[1] ? argv[1] : "NULL", argv[2] ? argv[2] : "NULL",
         argv[4] ? argv[4] : "NULL");
  return 0;
}

int main(int argc, char *argv[]) {
  sqlite3 *db;
  char *zErrMsg = 0;
  int rc;
  char query[256];
  const char *data = "Callback function called";

  rc = sqlite3_open("/tmp/minitwit.db", &db);
  if (rc) {
    fprintf(stderr, "Can't open database: %s\n", sqlite3_errmsg(db));
    return (0);
  }
  if (argc == 2 && strcmp(argv[1], "-h") == 0) {
    fprintf(stdout, "%s\n", docStr);
  }
  if (argc == 2 && strcmp(argv[1], "-i") == 0) {
    strcpy(query, "SELECT * FROM message");
    /* Execute SQL statement */
    rc = sqlite3_exec(db, query, callback, (void *)data, &zErrMsg);
    if (rc != SQLITE_OK) {
      fprintf(stderr, "SQL error: %s\n", zErrMsg);
      sqlite3_free(zErrMsg);
    }
  }
  if (argc >= 2 && strcmp(argv[1], "-i") != 0 && strcmp(argv[1], "-h") != 0) {
    int i;
    for (i = 1; i < argc; i++) {
      strcpy(query, "UPDATE message SET flagged=1 WHERE message_id=");
      strcat(query, argv[i]);
      rc = sqlite3_exec(db, query, callback, (void *)data, &zErrMsg);
      if (rc != SQLITE_OK) {
        fprintf(stderr, "SQL error: %s\n", zErrMsg);
        sqlite3_free(zErrMsg);
      } else {
        printf("Flagged entry: %s\n", argv[i]);
      }
    }
  }

  sqlite3_close(db);
  return 0;
}