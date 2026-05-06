import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const book = sqliteTable('book', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	author: text('author').notNull(),
	image: text('image').notNull(),
});

export * from './auth.schema';
