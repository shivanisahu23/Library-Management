# Copyright (c) 2025, Shivani Sahu and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class LibraryMembershipBenefits(Document):
	def expire_old_benefits():
		today = frappe.utils.today()
		benefits = frappe.get_all("Membership Benefit", filters={"valid_until": ["<", today]}, fields=["parent", "name"])
		for b in benefits:
			benefit = frappe.get_doc("Membership Benefit", b.name)
			benefit.db_set("remarks", "Expired")

