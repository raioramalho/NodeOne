/*
  Warnings:

  - You are about to drop the column `title` on the `example` table. All the data in the column will be lost.
  - Added the required column `email` to the `example` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_example" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_example" ("created_at", "id", "updated_at") SELECT "created_at", "id", "updated_at" FROM "example";
DROP TABLE "example";
ALTER TABLE "new_example" RENAME TO "example";
CREATE UNIQUE INDEX "example_email_key" ON "example"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
