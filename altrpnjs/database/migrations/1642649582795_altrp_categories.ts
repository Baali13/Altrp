import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PrefixCategories extends BaseSchema {
  protected tableName = 'altrp_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.uuid("guid")
      table.string("name")
      table.string("title")
      table.text("description")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}