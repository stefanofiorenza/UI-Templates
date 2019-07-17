<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 	<c:set var="bootstrapPath" value="${pageContext.request.contextPath}/resources/bootstrap" />
 	<c:set var="bootstrapExtPath" value="${pageContext.request.contextPath}/resources/bootstrap/extend" />
 	
	<!-- Bootstrap -->
	<link href="${bootstrapPath}/css/bootstrap.min.css" rel="stylesheet" />
	<link href="${bootstrapPath}/css/bootstrap-responsive.min.css" rel="stylesheet" />
	
	<!-- Bootstrap Extended -->
	<link href="${bootstrapExtPath}/jasny-bootstrap/css/jasny-bootstrap.min.css" rel="stylesheet">
	<link href="${bootstrapExtPath}/jasny-bootstrap/css/jasny-bootstrap-responsive.min.css" rel="stylesheet">
	<link href="${bootstrapExtPath}/bootstrap-wysihtml5/css/bootstrap-wysihtml5-0.0.2.css" rel="stylesheet">
	
	<!-- Bootstrap Extended -->
	<link rel="stylesheet" href="${bootstrapExtPath}/bootstrap-select/bootstrap-select.css" />
	<link rel="stylesheet" href="${bootstrapExtPath}/bootstrap-toggle-buttons/static/stylesheets/bootstrap-toggle-buttons.css" />
	