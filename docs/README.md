---
next: /Configure.md
---
# Installation

## Using Envato Plugin

You can use the envato WordPress plugin to install the WC CPT (Custom Post Type). 

This plugin helps customers receive updates to their premium Themes & Plugins purchased through Envato Market (ThemeForest & CodeCanyon).

Authors are encouraged to implement this plugin in their items so that customers have a reliable and consistent experience across products. [Download the lastest version](https://goo.gl/pkJS33)

#### How to install?

The plugin can be installed from a ZIP file via the WordPress.

![image](https://www.envato.com/lp/uploads/2018/03/envato-market-install-300x126.jpg)

1. Download the [ZIP file from here](https://envato.github.io/wp-envato-market/dist/envato-market.zip).
1. Login to your WordPress Dashboard
1. Go to Plugins > Add New
1. Click “Upload Plugin” at the top
1. Upload the envato-market.zip file
1. Once installed, click “Activate Plugin”
1. Visit the new “Envato Market” menu item

<table border="0">
    <tr>
        <td style="border: 0; width: 300px;">
            <img src="https://www.envato.com/lp/uploads/2018/03/envato-market-settings-300x244.jpg" alt="" /></td>
        <td style="border: 0">
            <h3>The Settings Page:</h3>
            <p>The plugin Settings Page allows you to configure your Envato API Personal Token. This API Token is generated from <a href="https://build.envato.com/create-token/?purchase:download=t&purchase:verify=t&purchase:list=t&_ga=2.112479431.2109519051.1666952707-1607833516.1640452597">build.envato.com</a> and will allow WordPress to securely receive item updates. </p>
        </td>
    </tr>
</table>

<table border="0">
    <tr>
        <td style="border: 0; width: 300px;">
            <h3>Plugin Updates:</h3>
            <p>Once the Envato API connection is made from the Settings page, a list of all purchased WordPress plugins will be made available. Now any purchased plugins can be installed or updated directly within WordPress. </p>
        </td>
        <td style="border: 0">
            <img src="https://www.envato.com/lp/uploads/2018/03/envato-market-plugin-page-300x244.jpg" alt="" />
        </td>
    </tr>
</table>


## Manual Installation

Another way to install WordPress plugins is by manually uploading the plugin files through your WordPress dashboard. 

This method allows you to install a plugin that may not be in the official WordPress directory but available from third-party directories instead, such as [CodeCanyon](https://codecanyon.net/category/wordpress).

Before starting the plugin installation process, you need to first download the plugin ZIP file from your [CodeCanyon Account](https://codecanyon.net/downloads). 

Next, access your WordPress admin area and click **Plugins -> Add New**. Then, locate the **Upload Plugin** button at the top-left side of the page. 

![image](/images/install-wp-plugins-2.png)

Select the plugin **ZIP** file from your computer that you want to upload, then click **Install Now**.

![image](/images/install-wp-plugins-7.png)

Wait for the plugin installation to finish and press **Activate Plugin**.
![image](/images/install-wp-plugins-6.png)

## Using an FTP Client

There are several premium and custom WordPress plugins that require you to install them manually using an FTP client. For a beginner, the process might be slightly more complicated because you will need to learn how to configure an FTP client first.

Not to worry – the following guide will walk you through the process step-by-step. All you have to do is simply follow the steps.

First, extract the ZIP file of the plugin and save it to a folder on your computer. Keep in mind that the extracted plugin file folder will be the one you need to upload through the FTP client.

Then, connect your website to the FTP server. To do so, [find the FTP details](https://www.hostinger.com/tutorials/ftp/filezilla-ftp-configuration) from your hosting provider. 

For Hostinger users, simply locate the Files menu on hPanel and click on FTP Accounts.

![image](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/11/install-wp-plugins-1.png)

Once connected, access your FTP client – for this example, we use [FileZilla](https://filezilla-project.org/). There, input your login credentials and press the **Quickconnect** button. Next, navigate to the **Remote Site** panel and locate the **wp-content/plugins/** folder.

On the **Local Site** panel, upload the extracted plugin folder from your computer to **wp-content/plugins/** folder on your server.

![image](/images/install-wp-plugins-8.png)

Once the transfer is complete, the WordPress plugin will be installed on your site. 

To activate the plugin, you need to access your WordPress dashboard. Go to the plugin section -> **Installed Plugins**, locate the plugin, and click **Activate**.