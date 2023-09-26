// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

package com.vermeg.powerbiIntegartion.config;

/**
 * Configuration class
 */
public abstract class Config {
	
	// Set this to true, to show debug statements in console
	public static final boolean DEBUG = false;
	
	//	Two possible Authentication methods: 
	//	- For authentication with master user credential choose MasterUser as AuthenticationType.
	//	- For authentication with app secret choose ServicePrincipal as AuthenticationType.
	//	More details here: https://aka.ms/EmbedServicePrincipal
	public static final String authenticationType = "ServicePrincipal";
	
	//	Common configuration properties for both authentication types
	// Enter workspaceId / groupId
	public static final String workspaceId = "236605eb-e644-40e6-b910-63d85274f0cd";

	// The id of the report to embed.
	public static final String reportId = "d2c6fba1-976c-44fd-83ab-42d525aa096e";

	// Enter Application Id / Client Id
	public static final String clientId = "1bccdc15-6d34-41d3-a8a7-cf3fec140f28";

	// Enter MasterUser credentials
	public static final String pbiUsername = "";
	public static final String pbiPassword = "";

	// Enter ServicePrincipal credentials
	public static final String tenantId = "63643b42-f4d7-4ba7-bfa6-5bf0c2741338";
	public static final String appSecret = "NIG8Q~SSDdll9ICqtCJyylyQB2jISygaiCnGqcL9";
		
	//	DO NOT CHANGE
	public static final String authorityUrl = "https://login.microsoftonline.com/";
	public static final String scopeBase = "https://analysis.windows.net/powerbi/api/.default";
	
	
	private Config(){
		//Private Constructor will prevent the instantiation of this class directly
		throw new IllegalStateException("Config class");
	}
	
}