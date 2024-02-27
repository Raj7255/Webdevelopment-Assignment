function calculateDeliveryTime(packageType) {
    let estimatedDeliveryTime;
  
    switch (packageType.toLowerCase()) {
      case "standard":
        estimatedDeliveryTime = "3-5 days";
        break;
      case "express":
        estimatedDeliveryTime = "1-2 days";
        break;
      case "overnight":
        estimatedDeliveryTime = "next day";
        break;
      default:
        estimatedDeliveryTime = "unknown";
        break;
    }
  
    console.log(`Estimated delivery time for ${packageType} package: ${estimatedDeliveryTime}`);
  }
  

  
  calculateDeliveryTime("standard");
  
  calculateDeliveryTime("express");
  
  calculateDeliveryTime("overnight");
  
  calculateDeliveryTime("unknown");
  