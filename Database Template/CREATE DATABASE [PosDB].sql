USE [master]
GO
/****** Object:  Database [PosDB]    Script Date: 6/7/2019 4:14:49 PM ******/
CREATE DATABASE [PosDB]
 
GO
USE [PosDB]

GO
CREATE TABLE [dbo].[Categories](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[TenantId] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Items]    Script Date: 6/7/2019 4:14:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Items](
	[Item_ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](50) NULL,
	[Image] [varchar](max) NULL,
	[Cost] [money] NULL,
	[TenantId] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[DeletedDate] [datetime] NULL,
	[IsActive] [bit] NOT NULL,
	[Comment] [nvarchar](50) NULL,
	[CategoryId] [int] NOT NULL,
	[Qty] [int] NOT NULL,
	[ReOrderLevel] [int] NOT NULL,
 CONSTRAINT [PK_Item] PRIMARY KEY CLUSTERED 
(
	[Item_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tenants]    Script Date: 6/7/2019 4:14:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tenants](
	[TenantId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[TradingAs] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[DeletedDate] [datetime] NULL,
	[IsActive] [bit] NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[VatNumber] [nvarchar](50) NULL,
	[VatRegister] [nvarchar](50) NULL,
 CONSTRAINT [PK_Tenants] PRIMARY KEY CLUSTERED 
(
	[TenantId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Transactions]    Script Date: 6/7/2019 4:14:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transactions](
	[TransactionId] [int] NOT NULL,
	[CustomerId] [int] NOT NULL,
	[Userid] [int] NOT NULL,
	[TransactionDate] [datetime] NOT NULL,
	[RequiredDate] [datetime] NULL,
	[ShippedDate] [datetime] NULL,
 CONSTRAINT [PK_Transactions] PRIMARY KEY CLUSTERED 
(
	[Userid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 6/7/2019 4:14:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[User_ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NULL,
	[Email] [varchar](50) NOT NULL,
	[TenantId] [int] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[DeletedDate] [datetime] NULL,
 CONSTRAINT [PK_User_1] PRIMARY KEY CLUSTERED 
(
	[User_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [IX_User]    Script Date: 6/7/2019 4:14:53 PM ******/
CREATE NONCLUSTERED INDEX [IX_User] ON [dbo].[User]
(
	[User_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Categories] ADD  CONSTRAINT [DF_Categories_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Items] ADD  CONSTRAINT [DF_Item_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO
ALTER TABLE [dbo].[Items] ADD  CONSTRAINT [DF_Item_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Items] ADD  CONSTRAINT [DF_Item_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Items] ADD  CONSTRAINT [DF_Item_CategoryId]  DEFAULT ((1)) FOR [CategoryId]
GO
ALTER TABLE [dbo].[Items] ADD  CONSTRAINT [DF_Items_Qty]  DEFAULT ((0)) FOR [Qty]
GO
ALTER TABLE [dbo].[Items] ADD  CONSTRAINT [DF_Items_ReOrderLevel]  DEFAULT ((1)) FOR [ReOrderLevel]
GO
ALTER TABLE [dbo].[Tenants] ADD  CONSTRAINT [DF_Tenants_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Tenants] ADD  CONSTRAINT [DF_Tenants_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_CustomerId]  DEFAULT ((1)) FOR [CustomerId]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_Userid]  DEFAULT ((1)) FOR [Userid]
GO
ALTER TABLE [dbo].[Transactions] ADD  CONSTRAINT [DF_Transactions_TransactionDate]  DEFAULT (getdate()) FOR [TransactionDate]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[User] ADD  CONSTRAINT [DF_User_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
USE [master]
GO
ALTER DATABASE [PosDB] SET  READ_WRITE 
GO
