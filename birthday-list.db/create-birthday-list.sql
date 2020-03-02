-- Create a new database called 'bdaylist'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF EXISTS (
    SELECT [name]
    FROM sys.databases
    WHERE [name] = N'bdaylist'
)
ALTER DATABASE [bdaylist] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
USE master
DROP DATABASE [bdaylist]
GO

IF NOT EXISTS (
SELECT [name]
FROM sys.databases
WHERE [name] = N'bdaylist'
)
CREATE DATABASE bdaylist
GO

USE bdaylist
-- Create a new table called '[Wishlist]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Wishlist]', 'U') IS NOT NULL

DROP TABLE [dbo].[Wishlist]
GO

CREATE TABLE [dbo].[Wishlist]
(
	[Id] int identity(1,1) not null primary key,
	[Name] nvarchar (50) not null,
	[Category] nvarchar (50) not null,
	[Color] nvarchar (50) not null,
	[Size] nvarchar (10) null
)

GO

-- Insert rows into table 'User' in schema '[dbo]'
INSERT INTO [dbo].[Wishlist]
( -- Columns to insert data into
 [Name], [Category], [Color], [Size]
)
VALUES
( -- First row: values for the columns in the list above
'Short Sleeve Shirt', 'Clothes', 'Teal', 'Small'
),
(
'iPad', 'Electronics', 'Rose Gold', ''
),
(
'Barbie', 'Toys', 'Brown', ''
)
GO


USE bdaylist
-- Create a new table called '[Guests]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Guests]', 'U') IS NOT NULL

DROP TABLE [dbo].[Guests]
GO

CREATE TABLE [dbo].[Guests]
(
	[Id] int identity(1,1) not null primary key,
	[firstName] nvarchar (25) not null,
	[lastName] nvarchar (25) not null,
	[Address] nvarchar (50) not null,
	[Relationship] nvarchar (50) not null,
	[RSVP] bit not null default (0),
	[City] nvarchar (50) not null,
	[State] nvarchar (2) not null
)

GO

-- Insert rows into table 'User' in schema '[dbo]'
INSERT INTO [dbo].[Guests]
( -- Columns to insert data into
 [firstName], [lastName], [Address], [Relationship], [RSVP], [City], [State]
)
VALUES
( -- First row: values for the columns in the list above
'James', 'Jones', '21 Jump Street', 'Cousin', 1, 'Nashville', 'IN'
)
GO
